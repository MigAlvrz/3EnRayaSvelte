<script>
    import { Router, Route } from "svelte-routing";

    import Header from "./Header.svelte";

    export let url = ''
</script>

<Header />
<Router {url}>
    <div>
        <Route path="" component={TresEnRaya} />
    </div>
</Router>

