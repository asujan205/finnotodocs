import { cn } from "../../../utils/common.ui.utils";
import { forwardRef, memo, useEffect, useState } from "react";
import {
  ButtonProps,
  buttonAppearanceTypes,
  buttonSizeTypes,
} from "./button.types";

import { getIconSizeForButton } from "./button.utils";

import { IsFunction, IsUndefined } from "../../../utils/common.ui.utils";

export const Button = memo(
  forwardRef(
    (
      {
        shape,
        className,
        size = "md",
        appearance = "primary",
        outline,
        dashed,
        wide,
        block,
        disabled,
        noAnimation,
        children,
        autoFocus,
        type,
        addTimeout,
        onClick,
        buttonIcon,
        onTouchStart = () => {},
        onMouseEnter = () => {},
        onMouseLeave = () => {},
        handleKeyDown,
        defaultMinWidth = false,
        noHover = false,
        progress,
        loading: loadingProp,
        buttonIconAlign = "left",
        ...props
      }: ButtonProps,
      ref: any
    ) => {
      const [loading, setLoading] = useState<boolean>(false);

      useEffect(() => {
        if (!IsUndefined(loadingProp)) {
          setLoading(loadingProp);
        }
      }, [loadingProp]);

      const next = () => {
        setLoading(false);
      };

      const handleOnClick = (e: any) => {
        if (loading) {
          e.preventDefault();
          return;
        }
        if (progress) {
          setLoading(true);
          /* after few seconds button will be enabled */
          if (addTimeout) {
            setTimeout(() => {
              setLoading(false);
            }, 400);
          }
        }
        if (IsFunction(onClick)) {
          e.preventDefault();
          onClick(next, e);
        }
      };

      return (
        <button
          className={cn(
            `btn group font-medium`,
            buttonSizeTypes[size],
            buttonAppearanceTypes[appearance],
            {
              "btn-outline": outline,
              "btn-wide": wide,
              "btn-block": block,
              [`btn-${shape}`]: shape,
              "no-animation": noAnimation,
              "min-w-[150px]": defaultMinWidth,
              "hover:shadow-none": noHover,
              "border-dashed  ": dashed,
            },
            className
          )}
          disabled={disabled}
          onClick={handleOnClick}
          onTouchStart={onTouchStart}
          onKeyDown={handleKeyDown}
          autoFocus={autoFocus}
          type={type}
          ref={ref}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          {...props}
        >
          {/* Render the button contents */}
          {buttonIcon || loading ? (
            <div
              className={cn("flex items-center gap-2", {
                "flex-row-reverse": buttonIconAlign === "right",
              })}
            >
              {/* {loading ? (
                                <Loading size={size} />
                            ) : (
                                <Icon
                                    iconColor={'text-primary-content'}
                                    size={getIconSizeForButton(size)}
                                    source={buttonIcon}
                                    isSvg
                                />
                            )} */}
              {children}
            </div>
          ) : (
            children
          )}
        </button>
      );
    }
  )
);
``;
