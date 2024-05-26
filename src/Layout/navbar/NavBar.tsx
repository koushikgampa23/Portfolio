export const NavBar = () => {
  {
    /* 
  const items: any = [
    {
      icon: <SettingOutlined />,
      children: [
        {
          tabText: (
            <a href="#Home" style={{ color: "white" }}>
              Home
            </a>
          ),
        },
        {
          tabText: <span>Home</span>,
        },
      ],
    },
  ];
*/
  }

  return (
    <>
      <div className="flex gap-3 py-5">
        <a href="#Home" className="tabText">
          Portfolio
        </a>
        <a href="#Home" className="tabText">
          Home
        </a>
        <a href="#About" className="tabText">
          About
        </a>
        <a href="#Skills" className="tabText">
          Skills
        </a>
        <a href="#Qualifications" className="tabText">
          Qualifications
        </a>
        <a href="#Projects" className="tabText">
          Projects
        </a>
        <a href="#Contact" className="tabText">
          Contact
        </a>
      </div>
      {/*
      <Menu
        mode="horizontal"
        items={items}
        theme="dark"
        className="block md:hidden"
  /> */}
    </>
  );
};
