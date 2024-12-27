## Environment

### CPU

``` bash
$ lscpu

Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          39 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   4
  On-line CPU(s) list:    0-3
Vendor ID:                GenuineIntel
  Model name:             Intel(R) Core(TM) i5-7500 CPU @ 3.40GHz
    CPU family:           6
    Model:                158
    Thread(s) per core:   1
    Core(s) per socket:   4
    Socket(s):            1
    Stepping:             9
    CPU(s) scaling MHz:   95%
    CPU max MHz:          3800.0000
    CPU min MHz:          800.0000
    BogoMIPS:             6802.13
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology no
                          nstop_tsc cpuid aperfmperf pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowpref
                          etch cpuid_fault pti ssbd ibrs ibpb stibp tpr_shadow flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid mpx rdseed adx smap clflushopt intel_pt xsaveopt xsavec xgetbv1 xsaves dtherm i
                          da arat pln pts hwp hwp_notify hwp_act_window hwp_epp vnmi md_clear flush_l1d arch_capabilities
Virtualization features:  
  Virtualization:         VT-x
Caches (sum of all):      
  L1d:                    128 KiB (4 instances)
  L1i:                    128 KiB (4 instances)
  L2:                     1 MiB (4 instances)
  L3:                     6 MiB (1 instance)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-3
Vulnerabilities:          
  Gather data sampling:   Mitigation; Microcode
  Itlb multihit:          KVM: Mitigation: VMX disabled
  L1tf:                   Mitigation; PTE Inversion; VMX conditional cache flushes, SMT disabled
  Mds:                    Mitigation; Clear CPU buffers; SMT disabled
  Meltdown:               Mitigation; PTI
  Mmio stale data:        Mitigation; Clear CPU buffers; SMT disabled
  Reg file data sampling: Not affected
  Retbleed:               Mitigation; IBRS
  Spec rstack overflow:   Not affected
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; IBRS; IBPB conditional; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
  Srbds:                  Mitigation; Microcode
  Tsx async abort:        Mitigation; TSX disabled
```

### Memory
``` bash
$ free
               total        used        free      shared  buff/cache   available
Mem:           64260       30632       19697         333       14976       33628
Swap:           2047           0        2047
```

### Linux
``` bash
$ uname -a

Linux work-pc 6.6.65-1-MANJARO #1 SMP PREEMPT_DYNAMIC Wed Dec 11 22:24:04 UTC 2024 x86_64 GNU/Linux

$ cat /etc/*-release

Manjaro Linux
DISTRIB_ID="ManjaroLinux"
DISTRIB_RELEASE="24.2.1"
DISTRIB_CODENAME="Yonada"
DISTRIB_DESCRIPTION="Manjaro Linux"
Manjaro Linux
NAME="Manjaro Linux"
PRETTY_NAME="Manjaro Linux"
ID=manjaro
ID_LIKE=arch
BUILD_ID=rolling
ANSI_COLOR="32;1;24;144;200"
HOME_URL="https://manjaro.org/"
DOCUMENTATION_URL="https://wiki.manjaro.org/"
SUPPORT_URL="https://forum.manjaro.org/"
BUG_REPORT_URL="https://docs.manjaro.org/reporting-bugs/"
PRIVACY_POLICY_URL="https://manjaro.org/privacy-policy/"
LOGO=manjarolinux

```


## run

``` bash
bun test-crypto.mjs > test.txt
```

## Segmentation fault

``` bash
============================================================
Bun v1.1.40 (b5b51004) Linux x64
Linux Kernel v6.6.65 | glibc v2.40
CPU: sse42 popcnt avx avx2
Args: "bun" "test-crypto.mjs"
Features: dotenv(2) jsc tsconfig tsconfig_paths 
Builtins: "bun:main" "node:buffer" "node:crypto" "node:fs" "node:os" "node:path" "node:string_decoder" "node:util/types" 
Elapsed: 2303584ms | User: 2285085ms | Sys: 129805ms
RSS: 1.04GB | Peak: 0.38GB | Commit: 1.04GB | Faults: 4

panic(main thread): Segmentation fault at address 0x0
oh no: Bun has crashed. This indicates a bug in Bun, not your code.

To send a redacted crash report to Bun's team,
please file a GitHub issue using the link below:

 https://bun.report/1.1.40/la1b5b5100Chw/7//Do9+omE+8oP2w5y5Eqswg6E6qvg6E0zw65E8g/3gEqvjhhF013ghF_A2AA

Illegal instruction (core dumped)

```