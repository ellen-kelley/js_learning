const tasks = [
	{ taskName: "Առաջադրանք 1", duration: 1000 },
	{ taskName: "Առաջադրանք 2", duration: 2000 },
	{ taskName: "Առաջադրանք 3", duration: 1500 },
];


function runTasksWithTotalTime(tasks) {
	let totalTime = 0;
	let promiseChain = Promise.resolve();

	tasks.forEach((task) => {
		promiseChain = promiseChain
			.then(() => new Promise((resolve) => setTimeout(resolve, task.duration)))
			.then(() => {
				console.log(task.taskName);
				totalTime += task.duration;
			});
	});

	return promiseChain.then(() => totalTime);
}

runTasksWithTotalTime(tasks)
	.then((totalTime) => {
		console.log(`Ընդհանուր տևողությունը՝ ${totalTime} միլիվայրկյան։`);
	})
	.catch((error) => {
		console.error("Սխալ տեղի ունեցավ:", error);
	});
