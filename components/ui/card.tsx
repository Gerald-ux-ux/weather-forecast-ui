import clsx from "clsx";
import Image from "next/image";
import React from "react";

type CardProps = {
  cardHeading: string;
  cardFooter: string | number | React.ReactElement;
  cardBody?: string | React.ReactElement | number;
  cardIcon?: any;
};
export default function Card({
  cardHeading,
  cardBody,
  cardFooter,
  cardIcon,
}: CardProps) {
  return (
    <div className={clsx("card bg-transparent border border-primary")}>
      <div className="card-body  flex flex-col items-center justify-center ">
        <h2 className="card-header text-primary">{cardHeading} </h2>
        {cardIcon ? (
          <Image src={cardIcon} alt="Icon" />
        ) : (
          <p className="text-content">{cardBody}</p>
        )}
        <div className="card-footer text-primary">
          <p>{cardFooter} </p>
        </div>
      </div>
    </div>
  );
}
