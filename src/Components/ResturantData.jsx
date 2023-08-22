// @ts-nocheck
import React from "react";
import { Tabs, TabList, TabPanels,  TabPanel } from "@chakra-ui/react";
import SpecialForYou from "./SpecialForYou";
import AllResturants from "./AllResturants";
import TabData from "./TabData";
import { resTabNames } from "../Data";

export default function ResturantData() {
  return (
    <div className="py-10">
      <Tabs variant="unstyled">
        <TabList display="flex" flexWrap="wrap" gap="20px">
          {resTabNames?.map((data, index) => (
            <TabData tabName={data?.name} />
          ))}
        </TabList>
        <TabPanels>
          <TabPanel padding="0px">
            <SpecialForYou />
            <AllResturants />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
