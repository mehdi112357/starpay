import { Tab, Tabs, TabList } from "react-tabs";

export default function VerticalTab({ tabItemsHeader, children }) {
  return (
    <div className="App">
      <Tabs className='flex lg:flex-row sm:flex-col xs:flex-col'>
        <TabList>
          {tabItemsHeader &&
            tabItemsHeader.map((item) => (
              <Tab value={item.value} key={item.name}>
                <p className={item.style}>{item.name}</p>
              </Tab>
            ))}
        </TabList>
        {children}
      </Tabs>
    </div>
  );
}
