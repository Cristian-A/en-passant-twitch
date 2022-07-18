
import { Streamer, Time } from '../config.js';
import { task } from '../parser.js';
import { live } from '../components/twitch.js';

task(async () => {
	if (await live(Streamer))
		return 'Join our thriving Discord community -> discord.gg/DKHBFF22TJ';
}, Time.minutes(20));
