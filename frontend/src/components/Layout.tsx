import Sidebar from "./Sidebar";

function Layout({children}: any) {
  return (
    <div style={{display:"flex"}}>
      <Sidebar />

      <main style={{flex:1}}>
        {children}
      </main>
    </div>
  );
}

export default Layout;