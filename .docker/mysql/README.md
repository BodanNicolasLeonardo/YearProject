### Recommended Values for `innodb_buffer_pool_size`
| Server RAM | Suggested `innodb_buffer_pool_size` |
| ---------- | ----------------------------------- |
| 2GB | 256M |
| 4GB | 512M–1G |
| 8GB | 1G–2G |
| 16GB | 2G–4G |
| 32GB | 4G–8G |
---
### Recommended Values for `innodb_buffer_pool_instances`
| `innodb_buffer_pool_size` | Suggested `innodb_buffer_pool_instances` |
| ------------------------- | ---------------------------------------- |
| ≤ 1GB | 1 |
| 2GB | 2 |
| 4GB | 4 |
| 8GB | 4–8 |
| 16GB | 8 |
| ≥ 32GB | 8–16 |
---
.docker/mysql/README.md