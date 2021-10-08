<script>
import Header from './Header.svelte';
import MainNav from './navigations/MainNav.svelte';
import Constructions from './Constructions.svelte';
</script>
   

<div class="flex">
    <div class="w-1/5">    
        <MainNav/>
    </div>
    <div class="w-4/5">
        <Constructions/>
    </div>
</div>


    <!-- <div class="flex-col">
        <LeftNav/>
        <Constructs>
            <span slot="title">Abstract Title</span>
            <div>
                <h2>-----------------------</h2>
            </div>
            <span slot="body">Construct to Code</span>
        </Constructs>
    </div>
</div> -->
