import { Link, 
  Outlet,
  useLoaderData,
  useSubmit,
Form,
redirect,
NavLink,
useNavigation,
} from "react-router-dom";
import { useEffect } from "react";

export default function Root() {
    const q = 123
    const navigation = useNavigation();
    const submit = useSubmit();
    const searching = false;



    return (
      <>
        <div id="sidebar">
          <h1>EDFS-Page</h1>
          <nav>
          <ul>
              <li key = "fileviewer">
                <NavLink
                    to={`fileviewer`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {<>Fileviewer</>}
                </NavLink> 
              </li>
          </ul>
          </nav>
        </div>
        <div id="detail" className={
          navigation.state === "loading" ? "loading" : ""
        }>
            <Outlet/>
        </div>
      </>
    );
  }