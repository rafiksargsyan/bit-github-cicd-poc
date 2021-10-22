import React from 'react';
import {MyButton} from '@my-scope/rsargsyan.my-scope.ui.my-button'

export type MyCardProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function MyCard({ text }: MyCardProps) {
  return (
    <div>
      {text}
    </div>
  );
}