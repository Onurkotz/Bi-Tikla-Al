import { useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllProducts, deleteProduct } from "../../api";
import { Box, Button, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";
import Loading from "../Loading/Loading";

import { Space, Table, Popconfirm } from "antd";

function AdminHome() {
  const queryClient = useQueryClient();

  const { data, status, error } = useQuery(["admin:products"], getAllProducts);

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });
  const toast = useToast();
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
                    toast({
                      title: "Ürün silindi!",
                      description: `${record.title} başarıyla silindi.`,
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                      containerStyle: {
                        fontSize: "20px",
                      },
                    });
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

  if (status === "loading") return <Loading />;
  if (status === "error") return error;

  return (
    <Box>
      <AdminNavigation />

      <Box mt="10" p="15px">
        <Table
          columns={columns}
          dataSource={data}
          rowKey="_id"
          pagination={false}
        />

      </Box>
    </Box>
  );
}

export default AdminHome;
