import Tabs from "./tabs";

function RandomComponent() {
    return <h1>Some random content</h1>;
  }

const TabTest=()=>{

    const tabs = [
        {
          label: "Tab 1",
          content: <div>This is content for Tab 1</div>,
        },
        {
          label: "Tab 2",
          content: <div>This is content for Tab 2</div>,
        },
        {
          label: "Tab 3",
          content: <RandomComponent />,
        },
      ];

      const handlechange=(currenttabindex)=>{
        console.log(currenttabindex)
      }
    return(
        <div>
            <Tabs tabsContent={tabs} onchange={handlechange}/>
        </div>
    )
}

export default TabTest