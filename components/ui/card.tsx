import React from "react";

type CardProps = {
  cardHeading: string;
  cardBody: string | React.ReactElement;
  cardFooter: string;
};
export default function Card({ cardHeading, cardBody, cardFooter }: CardProps) {
  return (
    <div className="card  w-48">
      <div className="card-body  flex flex-col items-center justify-center ">
        <h2 className="card-header">{cardHeading} </h2>
        <p className="text-content2">{cardBody}</p>
        <div className="card-footer">
          <p>{cardFooter} </p>
        </div>
      </div>
    </div>
  );
}
