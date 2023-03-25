<script>
    import Box from "./Box.svelte";
	import QRCode from "./QrCode.svelte";

	let domain = "http://localhost:5173/";
	let name = '';
	let linkedin = '';
	let github = '';

	function clicked(name, domain) {
		QRCode.codeValue(name)
	}
</script>

<Box>
	<h1 class="text-3xl font-bold pt-2">
	Gerador de QR Code
	</h1>
	<h3>
		
	</h3>
	<div class="m-[20px] shrink flex flex-wrap flex-row p-5">
		<div class="flex-auto basis-1/2">
			<label class="block py-2">
				<span class="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
				  Nome
				</span>
				<input value={name} class="border border-slate-300 rounded-md py-1 w-[300px]" placeholder="Seu nome">
			</label>
			<label class="block py-2">
				<span class="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
				  LinkedIn URL
				</span>
				<input value={linkedin} class="border border-slate-300 rounded-md py-1 w-[300px]" placeholder="https://www.linkedin.com/in/usuário">
			</label>				
			<label class="block py-2">
				<span class="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
				  GitHub URL
				</span>
				<input value={github} class="border border-slate-300 rounded-md py-1 w-[300px]" placeholder="https://www.github.com/usuário">
			</label>
			<div class="block py-2 content-center"> 
				<button class="font-medium py-1 px-10 rounded-md bg-blue-600 text-white " on:click={clicked}>
				Gerar Imagem
			</button>
			</div>
						
		</div>
		<div class="flex-auto basis-1/4 p-5">
			<QRCode codeValue={name} squareSize=200/>
		</div>
		
	</div>	
	
</Box>


<style lang="postcss">
:global(html) {
	background-color: theme(colors.gray.100);
}
</style>	