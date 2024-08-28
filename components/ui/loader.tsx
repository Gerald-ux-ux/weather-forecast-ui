import React from "react";
import Card from "./card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type LoaderProps = {
  skeletons: number;
  sideBarLoader?: boolean;
};
export default function Loader({ skeletons, sideBarLoader }: LoaderProps) {
  return (
    <div className="flex flex-col md:flex-row gap-3 w-full justify-evenly items-center">
      {[...Array(skeletons)].map((_, index) => (
        <Card
          key={index}
          sideBarLoader={sideBarLoader}
          cardHeading={
            <Skeleton width={80} baseColor="#333" highlightColor="#555" />
          }
          cardBody={
            <Skeleton
              circle={true}
              height={64}
              width={64}
              baseColor="#333"
              highlightColor="#555"
            />
          }
          cardFooter={
            <Skeleton width={60} baseColor="#333" highlightColor="#555" />
          }
        />
      ))}
    </div>
  );
}
