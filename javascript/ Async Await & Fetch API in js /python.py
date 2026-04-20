import multiprocessing

def burn_cpu():
    while True:
        pass  # infinite loop to keep CPU busy

if __name__ == "__main__":
    num_cores = multiprocessing.cpu_count()

    processes = []
    for _ in range(num_cores):
        p = multiprocessing.Process(target=burn_cpu)
        p.start()
        processes.append(p)

    for p in processes:
        p.join()