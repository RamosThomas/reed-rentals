import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { blue } from "@mui/material/colors";

import { Box, Paper, Typography } from "@mui/material";

import useCheckMobileScreen from "../react/hooks/useCheckMobileScreen";

import AppBar from "./AppBar";
import MobileContainer from "./MobileContainer";
import SearchPropertiesModal from "./SearchPropertiesModal";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

export default function MainContainer() {
  const [page, setPage] = React.useState<number>(0);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const isMobile: boolean = useCheckMobileScreen();

  React.useEffect(() => {
    console.log("open", isModalOpen);
  }, [isModalOpen]);

  return (
    <ThemeProvider theme={theme}>
      <SearchPropertiesModal open={isModalOpen} onClose={setIsModalOpen} />
      <AppBar
        onPageChange={setPage}
        onSearchClick={setIsModalOpen}
        isMobile={isMobile}
      />
      <Box sx={{ pt: 10 }}>
        {isMobile ? (
          <MobileContainer />
        ) : page === 0 ? (
          <Box sx={{ flexGrow: 1 }}>
            <Paper
              sx={{ color: "#fff", bgcolor: "#242526", mx: 20, px: 10, py: 5 }}
            >
              <Typography variant="h5">Home</Typography>
              <p>
                THANK YOU for checking out our web-site. If you are interested
                in what we will have available next year, you can get in touch
                with us to leave your name on our waiting list.We have very nice
                houses and keep them in great condition. For that reason we DO
                NOT accept pets and our housing is NO SMOKING. They get leased
                quickly. If you want to see any of them call me. IF YOU DON’T
                SEE WHAT YOU ARE LOOKING FOR RIGHT NOW, BE SURE TO CHECK BACK
                there may be a few last minute changes. You can leave your name
                on our waiting list if you want for opportunities. Leave me an
                email or call us and we will notify you when we have something
                the size you are looking for. We, Bob and Norene, own and
                personally manage all our units. We live in Greeley and are here
                when you need us. We have excellent units and reasonable rents.
                We would be happy to find you a home for the school year. PLEASE
                be aware that we DO NOT accept pets. Contact Norene at
                970-590-2883.
              </p>
            </Paper>
          </Box>
        ) : page === 1 ? (
          <div style={{ color: "white" }}>Available Properties</div>
        ) : (
          <div style={{ color: "white" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque id nulla a est consectetur volutpat. Praesent gravida
              dapibus tristique. Pellentesque eu orci non nulla blandit sodales
              et at augue. Praesent in luctus odio. Aenean ultrices risus orci,
              non congue nibh bibendum nec. Vivamus congue mattis nisl at
              volutpat. Pellentesque mattis orci vitae dolor rutrum, id pharetra
              neque ullamcorper. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Quisque non sem vel
              metus finibus rhoncus vitae a turpis. Proin porta ex sed enim
              sagittis pellentesque. Vestibulum gravida dictum sem in congue.
              Aenean eu ante enim. Aliquam sed mollis libero. Cras sit amet
              semper massa. Quisque nec fringilla risus. Donec ut hendrerit
              lacus. Mauris tristique nunc in bibendum viverra. Maecenas congue
              est quis odio sagittis, id sodales mi aliquet. Donec leo velit,
              laoreet quis nunc et, feugiat euismod ipsum. Aenean leo neque,
              semper ut metus ut, rhoncus congue urna. Nunc pellentesque, diam
              eu sodales tincidunt, augue odio blandit mi, sit amet tincidunt
              nisl purus cursus erat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur varius auctor nisi, quis malesuada elit
              tincidunt ac. Nulla facilisi. Aliquam tellus tellus, pellentesque
              vel sapien quis, consequat auctor orci. Mauris elementum augue
              eros, non pulvinar ante tincidunt a. Etiam et sapien ultricies,
              sodales felis nec, porttitor nulla. Integer accumsan aliquam
              tortor, ac auctor dui sodales eu. Morbi magna dui, ultrices mattis
              eleifend et, rhoncus quis ipsum. Nullam non suscipit eros. Nam
              sagittis lorem fringilla, egestas mi in, venenatis massa. Nunc
              malesuada velit risus, sed ullamcorper odio lacinia eget. In elit
              arcu, pharetra a faucibus ac, varius in tellus. Aliquam ultrices
              quam id posuere ullamcorper. Nulla dapibus sagittis bibendum.
              Mauris quis arcu vel ex blandit ornare a at ex. Vestibulum
              vulputate neque ac tellus volutpat, vitae sodales massa feugiat.
              Maecenas tempus eros nec dui aliquet semper. Quisque scelerisque
              purus ut tortor tempus, ac accumsan dui gravida. Etiam laoreet
              metus sed ex rhoncus tristique. Ut ultrices pretium condimentum.
              Cras eget lacinia lectus. Pellentesque hendrerit justo quis nibh
              sagittis, id tincidunt purus blandit. Nunc ultrices consectetur
              sagittis. In convallis eget nisl eget efficitur. Proin vel
              sollicitudin lorem. Praesent dui lorem, viverra et lectus sed,
              congue condimentum est. Morbi rutrum suscipit lacus et ultricies.
              Mauris ultricies mauris vel gravida congue. Quisque convallis
              tristique lacus, sed semper leo placerat ut. Praesent euismod arcu
              sit amet fringilla luctus. Sed pellentesque sapien a laoreet
              congue. Integer non rutrum turpis. Sed eget augue at risus
              vulputate elementum sit amet ac erat. Maecenas feugiat dictum
              odio. Mauris rutrum sed felis in vestibulum. Cras in tellus et
              ante gravida sodales. Praesent et placerat nisl. Quisque porttitor
              justo ac iaculis tempus. Nam sed pulvinar dolor, imperdiet
              placerat urna. In hac habitasse platea dictumst. Sed fermentum
              purus nec scelerisque cursus. Praesent dignissim, est a sagittis
              tristique, augue sem vulputate tortor, lobortis semper eros enim
              sit amet tortor. Nunc facilisis nulla in augue elementum, eget
              vulputate nibh ultricies. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Pellentesque id nulla a est consectetur volutpat.
              Praesent gravida dapibus tristique. Pellentesque eu orci non nulla
              blandit sodales et at augue. Praesent in luctus odio. Aenean
              ultrices risus orci, non congue nibh bibendum nec. Vivamus congue
              mattis nisl at volutpat. Pellentesque mattis orci vitae dolor
              rutrum, id pharetra neque ullamcorper. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Quisque non sem vel metus finibus rhoncus vitae a turpis. Proin
              porta ex sed enim sagittis pellentesque. Vestibulum gravida dictum
              sem in congue. Aenean eu ante enim. Aliquam sed mollis libero.
              Cras sit amet semper massa. Quisque nec fringilla risus. Donec ut
              hendrerit lacus. Mauris tristique nunc in bibendum viverra.
              Maecenas congue est quis odio sagittis, id sodales mi aliquet.
              Donec leo velit, laoreet quis nunc et, feugiat euismod ipsum.
              Aenean leo neque, semper ut metus ut, rhoncus congue urna. Nunc
              pellentesque, diam eu sodales tincidunt, augue odio blandit mi,
              sit amet tincidunt nisl purus cursus erat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Curabitur varius auctor nisi,
              quis malesuada elit tincidunt ac. Nulla facilisi. Aliquam tellus
              tellus, pellentesque vel sapien quis, consequat auctor orci.
              Mauris elementum augue eros, non pulvinar ante tincidunt a. Etiam
              et sapien ultricies, sodales felis nec, porttitor nulla. Integer
              accumsan aliquam tortor, ac auctor dui sodales eu. Morbi magna
              dui, ultrices mattis eleifend et, rhoncus quis ipsum. Nullam non
              suscipit eros. Nam sagittis lorem fringilla, egestas mi in,
              venenatis massa. Nunc malesuada velit risus, sed ullamcorper odio
              lacinia eget. In elit arcu, pharetra a faucibus ac, varius in
              tellus. Aliquam ultrices quam id posuere ullamcorper. Nulla
              dapibus sagittis bibendum. Mauris quis arcu vel ex blandit ornare
              a at ex. Vestibulum vulputate neque ac tellus volutpat, vitae
              sodales massa feugiat. Maecenas tempus eros nec dui aliquet
              semper. Quisque scelerisque purus ut tortor tempus, ac accumsan
              dui gravida. Etiam laoreet metus sed ex rhoncus tristique. Ut
              ultrices pretium condimentum. Cras eget lacinia lectus.
              Pellentesque hendrerit justo quis nibh sagittis, id tincidunt
              purus blandit. Nunc ultrices consectetur sagittis. In convallis
              eget nisl eget efficitur. Proin vel sollicitudin lorem. Praesent
              dui lorem, viverra et lectus sed, congue condimentum est. Morbi
              rutrum suscipit lacus et ultricies. Mauris ultricies mauris vel
              gravida congue. Quisque convallis tristique lacus, sed semper leo
              placerat ut. Praesent euismod arcu sit amet fringilla luctus. Sed
              pellentesque sapien a laoreet congue. Integer non rutrum turpis.
              Sed eget augue at risus vulputate elementum sit amet ac erat.
              Maecenas feugiat dictum odio. Mauris rutrum sed felis in
              vestibulum. Cras in tellus et ante gravida sodales. Praesent et
              placerat nisl. Quisque porttitor justo ac iaculis tempus. Nam sed
              pulvinar dolor, imperdiet placerat urna. In hac habitasse platea
              dictumst. Sed fermentum purus nec scelerisque cursus. Praesent
              dignissim, est a sagittis tristique, augue sem vulputate tortor,
              lobortis semper eros enim sit amet tortor. Nunc facilisis nulla in
              augue elementum, eget vulputate nibh ultricies.
            </p>
          </div>
        )}
      </Box>
    </ThemeProvider>
  );
}
