/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        height: 100px;
        border: 1px solid red;
        overflow: auto;
      }
      #ChildOne, #ChildTwo {
        height: 200px;
        border: 1px solid blue;
        overflow: auto;
      }
      #GrandchildOne, #GrandchildTwo {
        height: 300px;
        border: 1px solid green;
        overflow: auto;
      }
      .scrollContent {
        height: 400px;
        background-color: yellow;
      }
    </style>
    <div id="ChildOne">
      <div id="GrandchildOne">
        <div class="scrollContent"></div>
      </div>
    </div>
    <div id="ChildTwo">
      <div id="GrandchildTwo">
        <div class="scrollContent"></div>
      </div>
    </div>
`,

  is: 'x-scrollable-element'
});
