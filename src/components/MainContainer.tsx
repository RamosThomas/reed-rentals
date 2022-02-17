import React from "react";

import { Box } from "@mui/material";

import useCheckMobileScreen from "../react/hooks/useCheckMobileScreen";

import AppBar from "./AppBar";
import MobileContainer from "./MobileContainer";
import SearchPropertiesModal from "./SearchPropertiesModal";

export default function MainContainer() {
  const [page, setPage] = React.useState<number>(0);
  const [isModalOpen] = React.useState<boolean>(false);
  const isMobile: boolean = useCheckMobileScreen();

  return (
    <>
      <SearchPropertiesModal open={isModalOpen} />
      <AppBar onPageChange={setPage} isMobile={isMobile} />
      <Box sx={{ pt: 10 }}>
        {isMobile ? (
          <MobileContainer />
        ) : page === 0 ? (
          <div style={{ color: "white" }}>home</div>
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
    </>
  );
}
