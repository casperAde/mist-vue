import type { WriteFileOptions } from 'fs-extra'
import { resolve } from 'node:path'
import { ensureDirSync, writeFileSync } from 'fs-extra'
import { lightBlue, lightGreen } from 'kolorist'
import genIndexTemplate from '../template'
import genCoreTemplate from '../template/core'
import genBaseStyleTemplate from '../template/styleBaseTemp'
import genConfigStyleTemplate from '../template/styleConfigTemp'
import genStyleTemplate from '../template/styleTemp'
import genTestTemplate from '../template/testTemp'
import genTypesTemplate from '../template/types'

export interface ComponentMeta {
  name: string
  title: string
  category: string
}

const WRITE_FILE_OPTIONS: WriteFileOptions = { encoding: 'utf-8' }

export async function createComponent(meta: ComponentMeta) {
  const { name } = meta

  // 组件目录
  const componentDir = resolve('../components/src', name)

  // // 其他核心文件目录：组件源文件、类型、样式、测试
  // const compSrcDir = resolve(componentDir, 'src')
  const styleDir = resolve(componentDir, 'style')
  const testDir = resolve(componentDir, '__test__')
  //
  // // 创建目录
  // ensureDirSync(compSrcDir)
  ensureDirSync(styleDir)
  ensureDirSync(testDir)

  // 文件和内容创建
  // 核心文件：组件文件
  const coreFilePath = resolve(componentDir, `${name}.tsx`)
  writeFileSync(coreFilePath, genCoreTemplate(name), WRITE_FILE_OPTIONS)

  // 核心文件：组件类型文件
  const typesFilePath = resolve(componentDir, 'types.ts')
  writeFileSync(typesFilePath, genTypesTemplate(name), WRITE_FILE_OPTIONS)

  // 核心文件：组件样式文件
  // 样式文件
  // const styleFilePath = `${styleDir}/${name}.scss`
  const styleFilePath = `${styleDir}/index.scss`
  writeFileSync(styleFilePath, genStyleTemplate(name), WRITE_FILE_OPTIONS)

  const styleBaseFilePath = `${styleDir}/${name}-base.scss`
  writeFileSync(styleBaseFilePath, genBaseStyleTemplate(name), WRITE_FILE_OPTIONS)

  const styleConfigFilePath = `${styleDir}/${name}-config.scss`
  writeFileSync(styleConfigFilePath, genConfigStyleTemplate(), WRITE_FILE_OPTIONS)
  // 核心文件：测试文件
  const testFilePath = `${testDir}/${name}.test.tsx`
  writeFileSync(testFilePath, genTestTemplate(name), WRITE_FILE_OPTIONS)

  // 组件索引文件
  const indexFilePath = `${componentDir}/index.ts`
  writeFileSync(indexFilePath, genIndexTemplate(name), WRITE_FILE_OPTIONS)

  // 创建成功通知
  console.log(
    lightGreen(`
      ✔️ 组件${name}目录创建生成
    `),
  )
  console.log(
    lightBlue(`
      ✔️ 组件目录：${componentDir}
    `),
  )
}
