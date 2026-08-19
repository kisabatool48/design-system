import React, { useId } from 'react';
import type {
  InputProps,
  InputButtonAddon,
  InputDropdownAddon,
} from './Input.types';

export const Input: React.FC<InputProps> = ({
  label,
  size = 'md',
  error,
  helperText,
  leftButton,
  rightButton,
  leftDropdown,
  rightDropdown,
  className = '',
  id,
  required,
  disabled,
  ...props
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const messageId = `${inputId}-message`;

  const hasLeftAddon = !!(leftButton || leftDropdown);
  const hasRightAddon = !!(rightButton || rightDropdown);

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const segmentSizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-3 text-base',
  };

  const dropdownSizeStyles = {
    sm: 'pl-2.5 pr-7 py-1.5 text-xs',
    md: 'pl-3 pr-8 py-2 text-sm',
    lg: 'pl-4 pr-9 py-3 text-base',
  };

  const groupStateStyles = error
    ? 'border-red-500 focus-within:ring-red-500'
    : 'border-lightBorder dark:border-darkBorder';

  const renderButton = (addon: InputButtonAddon, position: 'left' | 'right') => (
    <button
      type="button"
      onClick={addon.onClick}
      disabled={disabled || addon.disabled}
      aria-label={addon.ariaLabel}
      className={`shrink-0 font-medium bg-black/5 dark:bg-white/10 text-lightText dark:text-darkText
        hover:bg-black/10 dark:hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed
        disabled:hover:bg-black/5 dark:disabled:hover:bg-white/10 transition-colors
        focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand
        ${segmentSizeStyles[size]}
        ${position === 'left' ? 'rounded-l-lg border-r' : 'rounded-r-lg border-l'}
        border-lightBorder dark:border-darkBorder`}
      {...addon.props}
    >
      {addon.content}
    </button>
  );

  const renderDropdown = (addon: InputDropdownAddon, position: 'left' | 'right') => (
    <div
      className={`relative shrink-0 ${position === 'left' ? 'border-r' : 'border-l'}
        border-lightBorder dark:border-darkBorder`}
    >
      <select
        aria-label={addon.ariaLabel || `${label} option`}
        value={addon.value}
        defaultValue={addon.value === undefined ? addon.defaultValue : undefined}
        onChange={(e) => addon.onChange?.(e.target.value)}
        disabled={disabled || addon.disabled}
        className={`appearance-none bg-black/5 dark:bg-white/10 font-medium
          text-lightText dark:text-darkText hover:bg-black/10 dark:hover:bg-white/20
          disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors
          focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand
          ${dropdownSizeStyles[size]}
          ${position === 'left' ? 'rounded-l-lg' : 'rounded-r-lg'}`}
        {...addon.props}
      >
        {addon.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5
          text-lightText/60 dark:text-darkText/60"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <div className="flex flex-col gap-1 font-sans">
      <label
        htmlFor={inputId}
        className="text-sm font-semibold text-lightText dark:text-darkText"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <div
        className={`flex w-full rounded-lg border bg-transparent transition-all
          focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black/5 dark:focus-within:ring-white/20
          ${groupStateStyles}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}`}
      >
        {leftButton && renderButton(leftButton, 'left')}
        {leftDropdown && renderDropdown(leftDropdown, 'left')}

        <input
          id={inputId}
          className={`w-full min-w-0 font-sans bg-transparent focus:outline-none
            disabled:cursor-not-allowed text-lightText dark:text-darkText
            placeholder:text-lightText/50 dark:placeholder:text-darkText/50
            ${sizeStyles[size]}
            ${hasLeftAddon ? 'rounded-l-none' : 'rounded-l-lg'}
            ${hasRightAddon ? 'rounded-r-none' : 'rounded-r-lg'}`}
          aria-invalid={!!error || undefined}
          aria-describedby={error || helperText ? messageId : undefined}
          disabled={disabled}
          required={required}
          {...props}
        />

        {rightDropdown && renderDropdown(rightDropdown, 'right')}
        {rightButton && renderButton(rightButton, 'right')}
      </div>

      {(error || helperText) && (
        <p
          id={messageId}
          className={`text-xs ${
            error ? 'text-red-500' : 'text-lightText/70 dark:text-darkText/70'
          }`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};
