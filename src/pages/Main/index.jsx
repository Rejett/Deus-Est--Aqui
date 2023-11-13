import React from "react";

import { Container } from "./styles";
import Header from "../../components/header";
import Body from "../../components/body";
// eslint-disable-next-line import/no-named-as-default
import Patrocinadores from "../../components/patrocinadores";
import Whatsapp from "../../components/whatsapp";

export default function Main() {
  return (
    <Container>
      <Header />
      <Body />
      <Patrocinadores />
      <Whatsapp />
    </Container>
  );
}
