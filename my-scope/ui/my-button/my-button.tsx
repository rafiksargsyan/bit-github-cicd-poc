import React from 'react';

export type MyButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};


export function MyButton({ text }: MyButtonProps) {
  return (
    <div>
      {text}
    </div>
  );
}
