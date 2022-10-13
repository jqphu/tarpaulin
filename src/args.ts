import { input } from '@actions-rs/core';
import { OutputType } from './config';

export interface ActionInputs {
  requestedVersion: string,
  timeout: string,
  runType: string,
  opts: string | null,
  outType: OutputType,
  workingDirectory: string | null,
}

export default function getActionInputs(): ActionInputs {
  const requestedVersion = input.getInput('version');
  const runType = input.getInput('run-types');
  const timeout = input.getInput('timeout');
  const opts = input.getInput('args');
  const outType = input.getInput('out-type') as OutputType;
  const workingDirectory = input.getInput('working-directory') as OutputType;

  return {
    requestedVersion,
    runType,
    timeout,
    opts,
    outType,
    workingDirectory
  };
}
