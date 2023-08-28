export interface ButtonProps {
  /**
   * Additional CSS classes to apply to the button.
   */
  className?: string;

  /**
   * The size of the button. Possible values are 'xs', 'sm', 'md', and 'lg'.
   */
  size?: ButtonSizeTypes;

  /**
   * The appearance style of the button. Possible values are 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', and 'base'.
   */
  appearance?: ButtonAppearance;

  /**
   * The shape of the button. Possible values are 'square' and 'circle'.
   */
  shape?: ButtonShape;

  /**
   * Specifies whether the button should have an outline style.
   */
  outline?: boolean;

  /**
   * Specifies whether the button should have a dashed border.
   */
  dashed?: boolean;

  /**
   * Specifies whether the button should have a wider width.
   */
  wide?: boolean;

  /**
   * Specifies whether the button should take up the full width of its container.
   */
  block?: boolean;

  /**
   * Specifies whether the button is disabled.
   */
  disabled?: boolean;

  /**
   * Specifies whether the button should have animation.
   */
  noAnimation?: boolean;

  /**
   * Specifies whether the button is in a loading state.
   */
  loading?: boolean;

  /**
   * The type of the button. Possible values are 'button', 'reset', and 'submit'.
   */
  type?: "button" | "reset" | "submit";

  /**
   * The content of the button.
   */
  children?: React.ReactNode;

  /**
   * The event handler for the button's onClick event.
   */
  onClick?: (...args: any) => void;

  /**
   * The event handler for the button's onTouchStart event.
   */
  onTouchStart?: (...args: any) => void;

  /**
   * The event handler for the button's onKeyDown event.
   */
  handleKeyDown?: (...args: any) => void;

  /**
   * Specifies whether the button should have a default minimum width.
   */
  defaultMinWidth?: boolean;

  /**
   * Specifies whether the button should be focused automatically when rendered.
   */
  autoFocus?: boolean;

  /**
   * The icon to be displayed on the button.
   */
  buttonIcon?: any;

  /**
   * The event handler for the button's onMouseEnter event.
   */
  onMouseEnter?: any;

  /**
   * The event handler for the button's onMouseLeave event.
   */
  onMouseLeave?: any;

  /**
   * Specifies whether the button should have a hover shadow.
   */
  noHover?: boolean;

  /**
   *
   * Defining whether the button icon should be in left or right
   */
  buttonIconAlign?: "right" | "left";

  /**
   *
   * Defining whether the button icon should be in left or right
   */
  progress?: boolean;

  addTimeout?: boolean;
}

/**
 * Defines the available sizes for the button.
 */
export type ButtonSizeTypes = keyof typeof buttonSizeTypes;

/**
 * Defines the available shapes for the button.
 */
export type ButtonShape = "square" | "circle";

/**
 * Defines the available appearances for the button.
 * It represents the keys of the `buttonAppearanceTypes` object.
 */
export type ButtonAppearance = keyof typeof buttonAppearanceTypes;

/**
 * Maps the button sizes to their corresponding CSS class names.
 */
export const buttonSizeTypes = {
  xs: "btn-xs", // Extra small button size class
  sm: "btn-sm", // Small button size class
  md: "btn-md", // Medium button size class
  lg: "btn-lg", // Large button size class
};

/**
 * Maps the button appearances to their corresponding CSS class names.
 */
export const buttonAppearanceTypes = {
  primary: "btn-primary", // Primary appearance class
  secondary: "btn-secondary", // Secondary appearance class
  accent: "btn-accent", // Accent appearance class
  info: "btn-info", // Info appearance class
  success: "btn-success", // Success appearance class
  warning: "btn-warning", // Warning appearance class
  error: "btn-error", // Error appearance class
  base: "bg-[#F1F1F1] text-base-primary border-0 hover:bg-[#F1F1F1] hover:shadow-none font-normal", // Base appearance class
  ghost: "bg-transparent border-none hover:bg-base-200/10", // ghost type only active on hover
  link: "btn-link text-[#2485E8]", // Link appearance class
  primary_light:
    "bg-primary/10 text-primary hover:bg-primary hover:text-primary-content border-0", // primary Light
  errorHover: "bg-base-100 btn-outline border-base-300 hover:btn-error ", // Error Hover
  plain: "bg-transparent border-0 hover:shadow-none", // Error Hover
};
