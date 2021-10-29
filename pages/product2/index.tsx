import React from "react";
import Image from "next/image";
import { Header } from "@components";
import data from "@public/meta.json";
import * as H from "./styles";

export default function ProductOne(): JSX.Element {
    const srcImage = data.plugins[1].img;
    return (
        <>
            <Header />
            <H.Container>
                <H.ProductName className="">
                    {data.plugins[1].name}
                </H.ProductName>
                <H.ProductContainer>
                    <H.DetailsLeft>
                        <H.ImageContainer>
                            <Image
                                src={srcImage}
                                width="100vw"
                                height="100vw"
                            />
                        </H.ImageContainer>
                        <H.TextDetails>
                            {data.plugins[1].detailedDescription}
                        </H.TextDetails>
                    </H.DetailsLeft>
                    <H.DetailsRight>
                        <H.ImageContainer>
                            <Image
                                src="https://www.fiduciascm.com.br/wp-content/uploads/2020/09/fiducia-financiamento.svg"
                                width="250px"
                                height="150px"
                            />
                            <H.TextDetails>Contate-nos</H.TextDetails>
                        </H.ImageContainer>
                    </H.DetailsRight>
                </H.ProductContainer>
            </H.Container>
        </>
    );
}
