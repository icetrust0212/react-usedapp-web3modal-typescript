import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { layersOrder } from "../../config/app.config";
import { getLayer } from "../../utils/helpers";

const Canvas = ({traitObject}: PropsType) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const drawImage = (ctx: CanvasRenderingContext2D, image: any) => {
        ctx.drawImage(
            image,
            0,
            0,
            500,
            500
        )

        console.log(ctx.getImageData(0, 0, 500, 500));
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d'); 
            
            if (context == null) throw new Error('Could not get context');

            context.clearRect(0, 0, canvas.width, canvas.height);
            for (const order of layersOrder) {
                // @ts-ignore
                const image = getLayer(order.name, traitObject[order.name])
                const newImage = new Image();
                newImage.src = image;
                drawImage(context, newImage);
            }
        }
    
    }, [drawImage, canvasRef]);

    return <canvas ref={canvasRef} width="700" height="500" />
}

interface PropsType {
    traitObject: {
        Alter: string,
        Background: string,
        Eyes: string,
        Grimace: string,
        Headwear: string,
        Mouth: string,
        Outfit: string
    }
}

export default Canvas;