import React from "react";
import Card from "@material-tailwind/react/Card";
import CardRow from "@material-tailwind/react/CardRow";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardStatus from "@material-tailwind/react/CardStatus";
import CardStatusFooter from "@material-tailwind/react/CardStatusFooter";
import "@material-tailwind/react/tailwind.css";
import Paragraph from "@material-tailwind/react/Paragraph";
export const DetailStar = ({ star }) => {
  return (
    <Card>
      <CardRow>
        <CardHeader color="blue" size="lg" iconOnly>
          <img
            src={require(`assets/star (${star.star_number}).png`)}
            alt={"stars"}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </CardHeader>

        <CardStatus title="" amount={star.nickName} />
      </CardRow>

      <div className=" overflow-auto  h-48">
        <CardStatusFooter color="green" amount="" date="">
          <Paragraph color="gray">{star.text}</Paragraph>
        </CardStatusFooter>
      </div>
    </Card>
  );
};
