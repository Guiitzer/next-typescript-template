import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <div className="text-center font-light py-10 bg-gray-700">
            <div className="container mx-auto">
                <h1 className="text-white text-6xl mb-10">Market Place</h1>
                <p className="text-lg text-white mb-3">
                    Conheça nossos produtos!
                </p>
                <Button type="button">
                    <a href="https://fiduciascm.com.br/" target="_blank">
                        Contate-nos
                    </a>
                </Button>
            </div>
        </div>
    );
};
