import React from 'react'
import {PauseSvg} from './PauseSvg';
function SvgButton() {
    return (
      <>
        <section className="button--section">
          <article>
            <button>
              <PauseSvg />
            </button>
            <p>Pause</p>
          </article>
          <article>
            <button>
              <PauseSvg />
            </button>
            <p>Reset</p>
          </article>
          <article>
            <button>
              <PauseSvg />
            </button>
            <p>stop</p>
          </article>
        </section>
      </>
    );
}

export { SvgButton}
