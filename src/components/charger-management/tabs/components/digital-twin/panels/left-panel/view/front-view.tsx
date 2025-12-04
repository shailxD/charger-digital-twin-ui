import Image from "next/image";

import BaseOutlines from "@/assets/base-outlines.svg";
import {
  ChargerConnector,
  SystemDetails,
  WeatherDisplay,
} from "./front-view/index";

export function FrontView() {
  return (
    <div className="flex min-h-0 flex-1 items-center justify-center">
      <div className="relative h-full w-auto px-3">
        <Image
          src={BaseOutlines}
          alt="Base Outlines"
          className="h-full w-auto object-contain"
        />

        <ChargerConnector
          side="leftside"
          label="G1"
          charging={false}
          temperature={29}
        />

        <ChargerConnector
          side="rightside"
          label="G2"
          charging={true}
          temperature={39}
        />

        <WeatherDisplay type="cloudy" temp={37} humidity={30} />

        <SystemDetails />
      </div>
    </div>
  );
}
