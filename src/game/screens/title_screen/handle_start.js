import store from "@/vuex/app_store";
import {START_GAME} from "@/vuex/mutations_types";
import {TITLE_SCREEN} from "../../screen_constants";

export default function handle_start(start) {

  const start_keys = [
    " ",
  ];

  window.addEventListener('keydown', (keydown_event) => {
    const screen = store.getters.currentScreen;
    if (screen !== TITLE_SCREEN){
      return;
    }

    keydown_event.preventDefault();

    if (start_keys.includes(keydown_event.key)) {

      store.commit({
        type: START_GAME,
      });
      /*
      store.dispatch(
        {
          type:START_GAME,
        }
      )
      */
    }
  })

  return start;
}