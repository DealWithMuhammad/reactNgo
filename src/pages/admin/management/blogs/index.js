import { Container } from "@mantine/core";
import SectionHeader from "@/components/Common/SectionHeader";
import BlogsTable from "@/components/Management/BlogsTable/Index";
import RootLayout from "@/components/RootLayout";

// import Header from "components/Header";

export default function page() {
  return (
    <>
      <RootLayout>
        {/* <Header admin={true} /> */}
        <Container size={"lg"}>
          <br />
          <SectionHeader
            headerInfo={{
              title: "Blog Management",
              subtitle: "Manage your posts efficiently",
              description:
                "Here you can manage all your posts, including editing and deleting.",
            }}
          />
          <br />
          <BlogsTable />
        </Container>
      </RootLayout>
    </>
  );
}
