import json, time, torch, platform
from diffusers import StableDiffusionXLPipeline
import diffusers, transformers
prompts = json.load(open("prompts.json"))
pipe = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0", torch_dtype=torch.float16, variant="fp16", use_safetensors=True)
pipe = pipe.to("mps")
pipe.enable_attention_slicing()
log = {"model": "stabilityai/stable-diffusion-xl-base-1.0 (SDXL 1.0 base, released 2023-07-26)",
       "revision": "462165984030d82259a11f4367a4eed129e94a7b",
       "settings": {"width": 1024, "height": 1024, "num_inference_steps": 30, "guidance_scale": 7.0,
                    "scheduler": type(pipe.scheduler).__name__, "negative_prompt": None, "refiner": None},
       "env": {"diffusers": diffusers.__version__, "transformers": transformers.__version__, "torch": torch.__version__, "device": "mps", "machine": platform.platform()},
       "runs": []}
for key, prompt in prompts.items():
    for seed in (1, 2, 3, 4):
        t = time.time()
        g = torch.Generator("cpu").manual_seed(seed)
        img = pipe(prompt=prompt, width=1024, height=1024, num_inference_steps=30, guidance_scale=7.0, generator=g).images[0]
        fn = f"sdxl/{key}_seed{seed}.png"
        img.save(fn)
        log["runs"].append({"prompt_id": key, "seed": seed, "file": fn, "seconds": round(time.time() - t, 1),
                            "generated_at": time.strftime("%Y-%m-%dT%H:%M:%S%z")})
        json.dump(log, open("sdxl/log.json", "w"), ensure_ascii=False, indent=2)
        print("done", fn, round(time.time() - t, 1), flush=True)
print("ALL DONE", flush=True)
