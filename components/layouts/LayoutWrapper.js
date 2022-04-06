import DefaultLayout from "./Default";

const layouts = {
  default: DefaultLayout
};

const LayoutWrapper = (props) => {
  const Layout = layouts[props.children.type.layout];
  
  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }
  return <DefaultLayout {...props}>{props.children}</DefaultLayout>;
};

export default LayoutWrapper;
