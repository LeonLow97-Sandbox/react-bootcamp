import Button from "./Button";
import { GoBookmark, GoDatabase, GoAlert } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded>
          <GoAlert />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          <GoBookmark />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          Success
        </Button>
      </div>
      <div>
        <Button warning outline>
          Warning
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Danger
        </Button>
      </div>
    </div>
  );
}

export default App;
