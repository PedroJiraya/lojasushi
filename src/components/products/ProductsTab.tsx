"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export const ProductsTab = () => {
  return (
    <Tabs defaultValue="tab1">
      <TabsList className="flex w-full">
        <TabsTrigger className="flex-1" value="tab1">
          Tab1
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="tab2">
          Tab2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1"> consteudo da tab1</TabsContent>
      <TabsContent value="tab2"> consteudo da tab2</TabsContent>
    </Tabs>
  );
};
