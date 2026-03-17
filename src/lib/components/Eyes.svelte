<script lang="ts">
    import { onMount } from 'svelte';

    let leftEye: HTMLElement;
    let rightEye: HTMLElement;
    let lid: HTMLElement;
    let lidWrapper: HTMLElement;

    function getPupilTranslation(eye: HTMLElement, mouseX: number, mouseY: number): string {
        const rect = eye.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const angle = Math.atan2(dy, dx);
        const dist = Math.min(Math.hypot(dx, dy), 6);
        return `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
    }

    const MAX_DIST = 6;

    function randomPupilTransform(): string {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * MAX_DIST;
        return `translate(${(Math.cos(angle) * dist).toFixed(2)}px, ${(Math.sin(angle) * dist).toFixed(2)}px)`;
    }

    onMount(() => {

        let idleTimeout: ReturnType<typeof setTimeout>;

        function scheduleIdleGlance() {
            const delay = Math.random() * 3000 + 500;
            idleTimeout = setTimeout(() => {
                const transform = randomPupilTransform();
                if (leftEye) leftEye.style.transform = transform;
                if (rightEye) rightEye.style.transform = transform;
                scheduleIdleGlance();
            }, delay);
        }

        const handleMouseMove = (e: MouseEvent) => {
            clearTimeout(idleTimeout);
            if (leftEye) leftEye.style.transform = getPupilTranslation(leftEye.parentElement!, e.clientX, e.clientY);
            if (rightEye) rightEye.style.transform = getPupilTranslation(rightEye.parentElement!, e.clientX, e.clientY);
            idleTimeout = setTimeout(scheduleIdleGlance, 2000);
        };

        scheduleIdleGlance();
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearTimeout(idleTimeout);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });
</script>

    <div class="eyes">
        <div class="eye">
            <div class="pupil" bind:this={leftEye}></div>
        </div>
        <div class="eye">
            <div class="pupil" bind:this={rightEye}></div>
        </div>
    </div>

<style>
    .lid-wrapper {
        position: relative;
        display: inline-flex;
        overflow: hidden;
    }

    .lid {
        position: absolute;
        inset: 0;
        background: #000000;
        z-index: 2;
        pointer-events: none;
        transform: translateY(0);
    }

    .eyes {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    .eye {
        width: 36px;
        height: 36px;
        background: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.25);
    }

    .pupil {
        width: 14px;
        height: 14px;
        background: #111;
        border-radius: 50%;
        transition: transform 60ms ease-out;
    }
</style>
