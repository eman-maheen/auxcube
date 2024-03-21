<div class="flex flex-col ">
    <h1 class="pageTitle">
        <slot name="pageHeading" />
    </h1>
	<div class="flex flex-col mx-auto">
        <div class="flex  2xl:container mx-auto">
            <slot name="pageContent"></slot>
        </div>
    </div>
</div>
