import { useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllProducts, deleteProduct } from "../../../api";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AdminNavigation from "../AdminNavigation/AdminNavigation";
import Loading from "../../Loading/Loading";

import { Space, Table, Popconfirm } from "antd";

function AdminHome() {
  const queryClient = useQueryClient();
  
  const { isLoading, isError, data } = useQuery(
    ["admin:products"],
    getAllProducts
  );

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const columns = useMemo(() => {
    return [
      {
        title: "Ürün Adı",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Fiyat",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Eklenme Tarihi",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Düzenle | Sil",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Link to={`/admin/products/${record._id}`}>Düzenle</Link>
            <Popconfirm
              title="Silmek istediğine emin misin?"
              okText="Evet"
              cancelText="İptal Et"
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("Deleted.");
                  },
                });
              }}
            >
              <Button>Delete</Button>
            </Popconfirm>
          </Space>
        ),
      },
    ];
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return "An error catched.";
  console.log(data);

  return (
    <Box>
      <AdminNavigation />

      <Box mt="10" p="15px">
        <Table columns={columns} dataSource={data} rowKey="_id" />;
      </Box>
    </Box>
  );
}

export default AdminHome;
