import { ReactNode } from "react";

type ContainerType = { children: ReactNode };

export const Container = ({ children }: ContainerType): JSX.Element => {
    return <div className="min-h-screen flex flex-col">{children}</div>;
};
