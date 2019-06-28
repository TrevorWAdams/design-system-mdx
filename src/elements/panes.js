/** @jsx jsx */
import { jsx } from "theme-ui"

const ContentPane = props => {
  return (
    <div
    {...props}
    sx={{
      width: `75%`,
    }}
  />
  )
}


const CenterPane = props => {
  return (
    <div
    {...props}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',
    }}
  />
  )
}


const SidebarPane = props => {
  return (
    <div
      {...props}
      sx={{
        display: 'flex',
        flexDirection: 'column',
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

export {ContentPane, CenterPane, SidebarPane} 
