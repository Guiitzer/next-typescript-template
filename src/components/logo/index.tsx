import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
    return (
        <Image
            src="https://www.fiduciascm.com.br/wp-content/uploads/2020/09/fiducia-logo-branco.svg"
            alt="Logo da empresa Fiducia"
            width="195"
            height="52"
        />
    );
};
