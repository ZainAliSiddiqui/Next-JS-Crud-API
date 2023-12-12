export type TinputProps = {
    type: string;
    placeHolder: string;
    className: string;
    required: boolean;
};

export type TformData = {
    title: string;
    description: string;
};

export type TbuttonProps = {
    title: string,
    type: "reset" | "button" | "submit" | undefined;
    className: string;
};

export type TdeleteRouteProps = {
    params: {
        id: string;
    };
};


export type TdeleteMutationOptions = {
    id: string;
    onSuccess: () => void;
};