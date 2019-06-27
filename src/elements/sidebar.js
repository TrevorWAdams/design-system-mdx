/** @jsx jsx */
import { jsx } from "theme-ui"

const Sidebar = props => {
  return (
    <div
      {...props}
      sx={{
        // values referencing scales defined in a theme
        // color: "primary",
        // bg: "gray",
        // fontFamily: "body",
        // raw CSS value
        //boxShadow: "0 0 1px 3px rgba(0, 0, 0, .125)",
        width: `25%`,
      }}
    />
  )
}

export default Sidebar
