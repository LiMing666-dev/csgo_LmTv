<script setup lang="ts">
const desserts = [
    {
        name: 'Frozen Yogurt',
        calories: 159,
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
    },
    {
        name: 'Eclair',
        calories: 262,
    },
    {
        name: 'Cupcake',
        calories: 305,
    }
]</script>

<template>
    <div style="color:white;">
        <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px;">
            CFG云备份
        </div>
        <div style="font-size: 12px;">
            使用不同机器进行游戏时，可通过上传/下载CFG来保持游戏设置相同，下载后需重启CS后才会生效
        </div>

        <div class="mt-4">
            <v-btn size="small">上传备份</v-btn>
        </div>

        <div class="CfgTable mt-4">
            <v-table height="200px" style="color:white" fixed-header>
                <thead>
                    <tr>
                        <th style="background: #222C3E;" class="text-left">
                            Cdg名称
                        </th>
                        <th style="background: #222C3E;" class="text-left">
                            操作
                        </th>
                    </tr>
                </thead>
                <tbody style="background: #222C3E;">
                    <tr v-for="item in desserts" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                    </tr>
                </tbody>
            </v-table>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>