import { useCallback, useState } from "react";
import React from "react";

export default function useDialogModel(Component, props){
    const [open,setOpen] =useState(false)

    const openDialog = useCallback(() => {
        setOpen(true);
    }, [])

    const DialogComponent = useCallback(() => {

        if (!open) return null;

        if (Component){
            return (
                <Component open={open} onClose = {() => setOpen(false)} {...props}/>
            )
        }

    },[open , Component])
    
    return [DialogComponent,openDialog]
}