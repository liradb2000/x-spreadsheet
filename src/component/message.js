/* global document */
import { h } from './element';
import Icon from './icon';
import { cssPrefix } from '../config';
import { eventEL } from './event';

export function xtoast(title, content) {
  const el = h('div', `${cssPrefix}-toast`);
  const dimmer = h('div', `${cssPrefix}-dimmer active`);
  const remove = () => {
    eventEL.document.body.removeChild(el.el);
    eventEL.document.body.removeChild(dimmer.el);
  };

  el.children(
    h('div', `${cssPrefix}-toast-header`).children(
      new Icon('close').on('click.stop', () => remove()),
      title,
    ),
    h('div', `${cssPrefix}-toast-content`).html(content),
  );
  eventEL.document.body.appendChild(el.el);
  eventEL.document.body.appendChild(dimmer.el);
  // set offset
  const { width, height } = el.box();
  const { clientHeight, clientWidth } = eventEL.document.documentElement;
  el.offset({
    left: (clientWidth - width) / 2,
    top: (clientHeight - height) / 3,
  });
}

export default {};
