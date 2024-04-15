"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Image } from "@mantine/core";
import SectionHeader from "@/components/Common/SectionHeader";
import { getDocById } from "../../api/functions/get";
import { Feature } from "@/types/feature";
import { Button, Link } from "@nextui-org/react";

const Service = () => {
  const pathname = usePathname();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true); // Set loading to true when fetching starts

        const match = pathname && pathname.match(/\/([^/]+)$/);
        const id = match && match[1];

        if (id) {
          let data = await getDocById(id, "service");
          setService(data);
        }

        setLoading(false); // Set loading to false when fetching completes
      } catch (error) {
        // Handle errors
        console.error("Error fetching service:", error);
        setLoading(false); // Ensure loading is set to false on error
      }
    };

    fetchService();
  }, [pathname]);

  // Find the service with a matching id

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : service ? (
        <>
          <SectionHeader
            headerInfo={{
              title: service?.title,
              subtitle: service?.subtitle,
              description: service?.description,
            }}
          />
          <Image
            src={service?.imageUrl}
            alt={"Room"}
            my={16}
            loading="eager"
            radius={"lg"}
            style={{
              width: "auto",
              height: "70vh",
              margin: "auto",
              objectFit: "cover",
            }}
          />
          <article className="mx-auto max-w-screen-md">
            <div className="prose mx-auto my-3 text-xl prose-a:text-blue-600">
              <div dangerouslySetInnerHTML={{ __html: service?.about }} />
            </div>
            <div className="flex justify-center my-10">
              <Button
                size="md"
                height="48px"
                width="100%"
                border="2px"
                borderColor="white"
                className="bg-[#f8cf2c] text-white"
              >
                <Link className="text-white" href="/services">
                  View All Projects
                </Link>
              </Button>
            </div>
          </article>
        </>
      ) : (
        <p>Service not found</p>
      )}
    </div>
  );
};

export default Service;
